export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, firstName, score, tier } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || '',
          AI_SCORE: score,
          AI_TIER: tier,
        },
        listIds: [18],
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 204) {
      return res.status(200).json({ success: true });
    }
    const data = await response.json();
    return res.status(400).json({ error: data.message || 'Subscription failed' });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}
