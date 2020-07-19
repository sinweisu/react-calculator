import styled from 'styled-components';

export const Calculator = styled.div`
    width: 300px;
    background-color: #CCCC99;
    display: flex;
    flex-direction: column;

    button {
        background-color:white;
        font-size:24px;
        height: 50px;
        margin-top: 10px; 
        margin-bottom: 10px; 
        border:1;
        border-color: white;
    }
`;

export const WindowDiv = styled.div`
    height: 50px;
    margin: 20px 20px 10px 20px;
    padding-right: 5px;
    background-color: #666666;
    text-align: right;
    color: white;
    font-size: 36px;
    font-weight: bold;
    overflow:hidden;
`;

export const KeyBoardDiv = styled.div`
    height: 310px;
    margin: 10px 20px;
    background-color: #CC9999;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const ClearKeyDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    button {
        margin-top: 10px;
        margin-bottom: 5px;
    }
`;

export const NumberAndOperatorDiv = styled.div`
    display: flex;
    justify-content: space-evenly;

    button {
        width: 50px;
        height: 50px;
        margin-right: 5px;
        margin-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;



export const NumberKeyDiv = styled.div`
flex - direction: column;
flex: 1 1 1 200px;
`;

export const OperatorDiv = styled.div`
flex - direction: column;
flex: 1 1 1 10px;

button {
    background - color:#99CCCC;
    font - size: 24px;
    height: 50px;
    margin - top: 10px;
    margin - bottom: 10px;
    border: 1;
    border - color: white;
}
`;