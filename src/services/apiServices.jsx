class ApiService {
  async getUserMainData(id) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      if (!data) {
        throw new Error(`User with id ${id} not found.`);
      }
      return data;

    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
  
  async getUserActivity(id) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      const data = await response.json();
      if (!data) {
        throw new Error(`User with id ${id} not found.`);
      }
      return data;

    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async getUserAverageSessions(id) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
      const data = await response.json();
      if (!data) {
        throw new Error(`User with id ${id} not found.`);
      }
      return data;
      
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async getUserPerformance(id) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/performance`);
      const data = await response.json();
      if (!data) {
        throw new Error(`User with id ${id} not found.`);
      }
      return data;

    } catch (error) {
      throw new Error(`Error: ${error}`);
    }

  }
}

export default new ApiService();
