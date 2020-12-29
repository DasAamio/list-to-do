export const state = () => ({
    projects: [],
    singleProject: {},
    projectsByStatus: [],
})

export const mutations = {
    SET_PROJECTS: (state, payload) => {
        state.projects = payload
    },
    SET_PROJECTS_BY_STATUS: (state, payload) => {
        state.projectsByStatus = payload
    },
    SET_SINGLE_PROJECTS: (state, payload) => {
        state.singleProject = payload
    },
}

export const actions = {
    requestGetAllProject: async ({commit}, {$axios}) => {
        const res = await $axios.$get('http://localhost:3000/project/allproject')
        commit('SET_PROJECTS', res)
    },
    requestGetSingleProject: async ({commit}, {$axios, id}) => {
        const res = await $axios.$get(`http://localhost:3000/project/singleproject/${id}`)
        commit('SET_SINGLE_PROJECTS', res[0])
    },
    requestGetProjectByStatus: async ({commit}, {$axios, status}) => {
        const res = await $axios.$get(`http://localhost:3000/project/proectbystatus/${status}`)
        commit('SET_PROJECTS_BY_STATUS', res)
    },
    requestDeleteProject: async ({commit, dispatch}, {$axios, id}) => {
        const res = await $axios.$post('http://localhost:3000/project/deleteproject', {
            id
        })
        if (res.msg === "Deleted") {
            await dispatch('requestGetAllProject', {$axios})
        }
        alert(res.msg)
    },
    requestCreateProject: async ({dispatch}, {$axios, title, description, status, deadline, isImportant, tasks}) => {
        const res = await $axios.$post('http://localhost:3000/project/addproject', {
            title, description, status, deadline, isImportant, tasks
        })
        if (res.msg === "Project Added") {
            await dispatch('requestGetAllProject', {$axios})
            return {
                msg: "Project Added",
                code: 'SUCCESS'
            }
        }

        return {
            msg: res.msg,
            code: 'FAILED'
        }
    },
    requestEditProject: async ({dispatch}, {$axios, id, title, description, status, deadline, isImportant, tasks}) => {
        const res = await $axios.$post('http://localhost:3000/project/updateproject', {
            id, title, description, status, deadline, isImportant, tasks
        })
        if (res.msg === "Project Updated") {
            await dispatch('requestGetAllProject', {$axios})
            return {
                msg: "Project Updated",
                code: 'SUCCESS'
            }
        }
        return {
            msg: res.msg,
            code: 'FAILED'
        }
    }

}

export const getters = {
    projects: ({projects}) => projects,
    projectsByStatus: ({projectsByStatus}) => projectsByStatus,
    singleProject: ({singleProject}) => singleProject
}