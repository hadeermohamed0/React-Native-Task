const fetchData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=50');
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export default fetchData;
