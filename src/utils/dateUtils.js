export function getDaysAgo(dateString) {
  if (!dateString) return null;

  const past = new Date(dateString);
  const today = new Date();

  const diffTime = today - past;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
