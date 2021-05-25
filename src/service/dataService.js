import axios from '@/axios';


/** 
*Запрашивает список всех элементов
*/
export async function fetchTodos() {
    try{
        const response = await axios.get('/todos');
        return response.data.todos;
    } catch (error) {
        console.error({ error });
        throw error;
    }
}


/**
*Создает новый элемент
*/
export async function createTodo({ title, isComplited}) {
    try{
        const response = await axios.post('/todos', {
            title
        });
        return response.data;
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

/**
*Удаляет один элемент
*/
export async function deleteTodoById(id) {
    try{
        const response = await axios.delete('/todos/' + id);
        return response.data;
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

/**
*Меняет статус элемента
*/
export async function patchTodo({id, isCompleted}) {
    try{
        const response = await axios.patch('/todos/' + id, {
            isCompleted
        });
        return response.data;
    } catch (error) {
        console.error({ error });
        throw error;
    }
}
