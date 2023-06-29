import { mockData } from '@/api/__MOCKS__/mockData.js';

/**
 * The above code defines a class called `ApiService` with a method `getUserData` that simulates an API
 * call and returns user data based on the provided id.
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ApiService {
  async getUserData(id) {
    // Simule le temps de réponse d'une API
    await delay(1000);

    // Ici, nous utilisons le mockData à la place d'une véritable requête API
    const userData = mockData.flatMap(obj => obj.user).find(user => user.id === Number(id));

    // Si l'utilisateur n'est pas trouvé, nous renvoyons une erreur
    if (!userData) {
      throw new Error(`User with id ${id} not found.`);
    }

    return userData;
  }
}

export default new ApiService();
