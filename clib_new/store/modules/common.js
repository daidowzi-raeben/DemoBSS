// state
const state = {
    commonMsg: 'common'
}

// getters
const getters = {
}

// mutations
const mutations = {
}

// actions
const actions = {
    POST_AXIOS({ commit }, params, state) {
        axios
            .post('', params, {
                header: {
                    'Context-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
            })
            .catch((res) => {
            })
    },
}



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}