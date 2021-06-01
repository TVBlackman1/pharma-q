export default {
    data() {
        return {
            serverAddress: "/"
        }
    },
    methods: {
        _processStatus(response) {
            if (response.status === 200 || response.status === 0) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error("Error loading"))
            }
        },
        _parseBlob(response) {
            return response.blob();
        },
        async _serverRequest(apiAddress, body = {}) {
            const address = this.getServerAddress() + apiAddress
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            };

            const response = await fetch(address, requestOptions);
            const data =  await response.json();
            this.reqIsReady = true
            return data
        }
    }
}