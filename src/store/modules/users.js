export default  {
    actions: {
        addUser(ctx, user) {
            const newUser = {
                name: user.name,
                email: user.email,
                age: user.age
            };
            ctx.commit('addUser', newUser);
        },
        setError(ctx, errorMessage) {
            ctx.commit('setError', errorMessage);
        },
        unsetError(ctx) {
            ctx.commit('unsetError');
        }
    },
    mutations: {
        addUser(state, newUser) {
            state.users = [
                ...state.users,
                {...newUser, id: ++state.users.length}
            ]
        },
        setError(state, errorMessage) {
            state.error = {
                active: true,
                message: errorMessage
            }
        },
        unsetError(state) {
            state.error = {
                active: false,
                message: null,
            }
        }

    },
    state: {
        users: [
            {
                id: 1,
                name: 'Mark',
                email: 'email@gmail.com',
                age: 22
            }
        ],
        error: {
            active: false,
            message: null,
        }
    },
    getters: {
        allUsers(state) {
            return state.users;
        },
        getErrorStatus(state) {
            return state.error.active;
        },
        getErrorMessage(state) {
            return state.error.message;
        }
    }
}