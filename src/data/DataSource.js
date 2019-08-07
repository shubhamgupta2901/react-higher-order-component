import axios from 'axios';

class DataSource {  
    static getComments = async () =>{
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    static getBlogPost = async (blogId) =>{
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    } 

    
}

export default DataSource;