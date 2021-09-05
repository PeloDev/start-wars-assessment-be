import axios from "axios";

const baseURL = 'https://swapi.dev/api/';

export const resolvers = {
    Query: {
        getAllPeople: async (_parent: any, args: any, _context: any, _info: any) => { 
            let result = await axios.get(`${baseURL}people/?page=${args.page ?? 1}`);
            if (result.data) {
                const { data } = result;
                const { count, results } = data;
                // return results;
                let completeResults = [];
                for (let i = 0; i < results.length; i++) {
                    const currentPerson = results[i];
                    const personId = currentPerson.url.split('/')[currentPerson.url.split('/').length - 2]
                    completeResults.push({...currentPerson, id:personId })
                }
                
                return {
                    count: completeResults.length,
                    total: count,
                    people: completeResults
                };
            }
            else
                return [];
        },
        getPersonById: async (_parent: any, args: any, _context: any, _info: any) => {
            let result = await axios.get(`${baseURL}/people/${args.id}/`);
            if (result.data) {
                const { data } = result;
                let completeResult = data;
                completeResult.id = args.id;
                let homeworldRes = await axios.get(data.homeworld);
                completeResult.homeworldOb = homeworldRes.data;
                return completeResult;
            }
            else
                return null;
        },
        searchPerson: async (_parent: any, args: any, _context: any, _info: any) => {
            let result = await axios.get(`${baseURL}/people/?search=${args.name}`);
            if (result.data) {
                const { data } = result;
                let completeResults = [];// data.results
                for (let i = 0; i < data.results.length; i++) {
                    const currentPerson = data.results[i];
                    const personId = currentPerson.url.split('/')[currentPerson.url.split('/').length - 2]
                    completeResults.push({...currentPerson, id:personId })
                }
                return completeResults;
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