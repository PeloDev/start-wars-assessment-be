import axios from "axios";

const baseURL = 'https://swapi.dev/api/';

export const resolvers = {
    Query: {
        getAllPeople: async (_parent: any, args: any, _context: any, _info: any) => { 
            let result = await axios.get(`${baseURL}people/?page=${args.page ?? 1}`);
            if (result.data) {
                const { data } = result;
                const { results } = data;
                return results;
                // let completeResults = [];
                // for (let i = 0; i < results.length; i++) {
                //     const currentPerson = results[i];
                //     let homeworldRes = await axios.get(currentPerson.homeworld);
                //     completeResults.push({...currentPerson, homeworld: homeworldRes.data})
                // }
                
                // return completeResults;
            }
            else
                return [];
        },
        searchPerson: async (_parent: any, args: any, _context: any, _info: any) => {
            let result = await axios.get(`${baseURL}/people/?search=${args.name}`);
            if (result.data) {
                const { data } = result;
                return data.results;
            }
            else
                return [];
        },
        fetchHomeworldDetails: async (_parent: any, args: any, _context: any, _info: any) => {
            let result = await axios.get(`${args.url}`);
            if (result.data) {
                const { data } = result;
                return data;
            }
            else
                return null;
        }
    },
};