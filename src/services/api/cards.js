import api from '@/services/api'

export default {

    async get_cards(id) {
        return await api.get("/card/" + id + '/')
    },

    async update_card(id, {card_id, card_front, card_back}) {
        return await api.patch("/card/" + id + "/", {card_id, card_front, card_back})
    },
}