// Netlify Function for GitHub OAuth - Auth endpoint
export async function handler(event) {
  const { GITHUB_CLIENT_ID } = process.env;

  if (!GITHUB_CLIENT_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GitHub Client ID not configured' }),
    };
  }

  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: `${process.env.URL}/api/callback`,
    scope: 'repo,user',
  });

  return {
    statusCode: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params}`,
      'Cache-Control': 'no-cache',
    },
  };
}
