exports.getDashboardData = (req, res) => {
  // Example data; replace with real data fetching logic
  const data = {
    users: 100,
    transactions: 50,
    revenue: 10000,
    issues: 5,
  };
  res.json(data);
};
