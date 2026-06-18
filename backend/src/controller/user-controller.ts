import { User } from '../model/user';
import { UserDetails } from '../model/user-details';
import data from '../users.json';

export class UserController {
    private _dataStore: UserDetails[];

    constructor() {
        this._dataStore = [];
        try {
            this._dataStore.push(...data);
        } catch (e) {
            console.error('Failed to load data from <users.json>');
        }
    }

    public getUsers(): User[] {
        return this._dataStore.map(({ id, last_name, first_name }) => ({ id, last_name, first_name }) as User);
    }

    /**
     * Find a user by id
     *
     * @param id The user id
     * @return The matching user details, or undefined if the user is not found
     */
    public getUserById(id: string): UserDetails | undefined {
        return this._dataStore.find(userDetail => id === userDetail.id);
    }
}
