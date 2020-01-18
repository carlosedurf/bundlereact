import styled from 'styled-components';

export const MenuBody = styled.div`
    
    ul{
        display: flex;
        list-style: none;

        li{
            

            a{
                text-decoration: none;
                padding: 10px 25px;
                color: #FFF;
                transition: all ease 0.3s;
                font-size: 15px;
                text-transform: uppercase;
                font-family: sans-serif;

                &:hover{
                    background-color: #0080FF;
                }
            }
        }
    }
    
`;