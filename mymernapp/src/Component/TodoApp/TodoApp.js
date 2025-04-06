import React from 'react';
import styled from 'styled-components';

// Styled components (updated with table styles)
const DemoContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h1`
  color: ${props => props.color || '#333'};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputLabel = styled.label`
  width: 100px;
  font-weight: 500;
`;

const InputField = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
    transform: none;
  }
`;

const AddButton = styled(Button)`
  background-color: #2ecc71;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #27ae60;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #eee;
  margin: 2rem 0;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #fadbd8;
  border-radius: 4px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Table styles
const TodoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: #3498db;
  color: white;
`;

const TableHeaderCell = styled.th`
  padding: 0.75rem;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  &:hover {
    background-color: #e9f7fe;
  }
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`;

const EditButton = styled(ActionButton)`
  background-color: #f39c12;

  &:hover {
    background-color: #e67e22;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

  const SaveButton = styled(ActionButton)`
  background-color: #f39c12;

  &:hover {
    background-color: #e67e22;
  }
`;

const CancleButton = styled(ActionButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

function TodoApp() {
    const [color, setColor] = React.useState("#3498db");
    const [error, setError] = React.useState("");
    const [inputValue, setInputValue] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const [editingId, setEditingId] = React.useState(null);
    const [editValue, setEditValue] = React.useState("");

    const handleAddTodo = () => {
        if (!inputValue.trim()) {
            setError("Please enter a value");
            return;
        }
        
        setError("");
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            createdAt: new Date().toLocaleString()
        };
        
        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleEditTodo = (todo) => {
        setEditingId(todo.id);
        setEditValue(todo.text);
    };

    const handleUpdateTodo = () => {
        setTodos(todos.map(todo => 
            todo.id === editingId ? { ...todo, text: editValue } : todo
        ));
        setEditingId(null);
        setEditValue("");
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditValue("");
    };

    return (
        <>
            <DemoContainer>
                <Divider />
                <Title color={color}>Todo App</Title>

                <InputGroup>
                    <InputRow>
                        <InputLabel>Enter Text:</InputLabel>
                        <InputField
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter your todo"
                            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                        />
                    </InputRow>
                </InputGroup>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <AddButton onClick={handleAddTodo}>Add Todo</AddButton>

                {todos.length > 0 && (
                    <>
                        <Divider />
                        <h3>Your Todos:</h3>
                        <TodoTable>
                            <TableHeader>
                                <tr>
                                    <TableHeaderCell>Task</TableHeaderCell>
                                   
                                    <TableHeaderCell>Actions</TableHeaderCell>
                                </tr>
                            </TableHeader>
                            <tbody>
                                {todos.map(todo => (
                                    <TableRow key={todo.id}>
                                        <TableCell>
                                            {editingId === todo.id ? (
                                                <input
                                                    type="text"
                                                    value={editValue}
                                                    onChange={(e) => setEditValue(e.target.value)}
                                                />
                                            ) : (
                                                todo.text
                                            )}
                                        </TableCell>
                                        
                                        <TableCell>
                                            {editingId === todo.id ? (
                                                <>
                                                    <SaveButton onClick={handleUpdateTodo}>Save</SaveButton>
                                                    <CancleButton onClick={handleCancelEdit}>Cancel</CancleButton>
                                                </>
                                            ) : (
                                                <>
                                                    <EditButton onClick={() => handleEditTodo(todo)}>
                                                        Edit
                                                    </EditButton>
                                                    <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
                                                        Delete
                                                    </DeleteButton>
                                                </>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </tbody>
                        </TodoTable>
                    </>
                )}

                <Divider />
            </DemoContainer>
        </>
    );
}

export default TodoApp;