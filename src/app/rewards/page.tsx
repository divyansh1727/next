export default function RewardsPage() {
  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">🏅 Your Rewards</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-yellow-200 rounded-xl">Badge: Beginner</div>
        <div className="p-4 bg-green-200 rounded-xl">Badge: Explorer</div>
        <div className="p-4 bg-purple-200 rounded-xl">Badge: Master</div>
      </div>
    </main>
  );
}
