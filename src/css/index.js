import styled from "styled-components";

export const Item = styled.div`
    font-size: 20px;
`;

export const Info = styled.div`
    display: block;
    text-align: right;
    padding: 5px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: -15px;
    b {
        color: #eee;
    }
    span {
        color: #999;
        padding-right: 10px;
    }
    a {
        color: #40a9ff;
        padding-left: 10px;
    }
`;
export const LoginContainer = styled.div`

`;

export const Div = styled.div`
    margin: 30px 200px;
    @media screen and (max-width: 960px) {
        margin: 30px 100px;
    }
    @media screen and (max-width: 670px) {
        margin: 30px 50px;
    }
    .login_modal {
        .ant-modal-footer{
            text-align: center;
        }
    }
`