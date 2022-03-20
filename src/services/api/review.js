import api from '@/services/api'

export default {
    async get_deck_review(deck_id) {
        return await api.get("/review/" + deck_id)
    }
}