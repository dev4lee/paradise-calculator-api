export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { now, goal, save } = req.body;

  if (!now || !goal || !save || save === 0) {
    return res.status(400).json({ error: '잘못된 입력입니다.' });
  }

  const current = parseFloat(now);
  const target = parseFloat(goal);
  const monthly = parseFloat(save);

  const months = Math.ceil((target - current) / monthly);

  res.status(200).json({ months });
}
