import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '@/api/__MOCKS__/mockData.js';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ApiService {
  async getUserMainData(id) {
    await delay(0);

    const userData = USER_MAIN_DATA.find(user => user.id === Number(id));

    if (!userData) {
      throw new Error(`User with id ${id} not found.`);
    }

    
    
    return userData;
  }

  async getUserActivity(id) {
    await delay(1000);

    const userActivity = USER_ACTIVITY.find(activity => activity.userId === Number(id));


    if (!userActivity) {
      throw new Error(`UserActivity for userId ${id} not found.`);
    }

    return userActivity;
  }

  async getUserAverageSessions(id) {
    await delay(1000);

    const userAverageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === Number(id));


    if (!userAverageSessions) {
      throw new Error(`UserAverageSessions for userId ${id} not found.`);
    }

    return userAverageSessions;
  }

  async getUserPerformance(id) {
    await delay(1000);

    const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === Number(id));


    if (!userPerformance) {
      throw new Error(`UserPerformance for userId ${id} not found.`);
    }

    return userPerformance;
  }
}

export default new ApiService();
