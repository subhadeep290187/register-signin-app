const ApiCall={

    async get(url:string){
        try {
            const response = await fetch(url, {
                // learn more about this API here: https://graphql-pokemon2.vercel.app/
                method: 'GET',
                headers: {
                  'content-type': 'application/json;charset=UTF-8',
                }
              });
              return response.json()
        } catch (error) {
            return error;
        }
    }
}
export default ApiCall