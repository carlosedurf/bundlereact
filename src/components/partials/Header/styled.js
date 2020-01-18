import styled from 'styled-components';

export const PageHeader = styled.div`
    min-height: 100px;
    background-color: #1976D2;
    width: 100%;
    
    
    .top{
        display: flex;
        height: 100px;
        .logo{
            width: 200px;
            font-size: 27px;
            color: #FFF;
            font-family: sans-serif;
            font-weight: bold;
            line-height: 100px;
        }

        .menu{
            flex: 1;
            height: 100%;
            line-height: 100px;
        }
    }

`;