import styled from "styled-components"

export const Container = styled.div`
    .carInfo {
        position: absolute;
        display: flex;
        width: 100%;
        justify-content: center;
        line-height: 5px;
        top: 70%;
        color: white;
        span {
            font-size: 10px;
            width: 8rem;
            a, h2 {
                font-size: 12px;
                font-weight: 400;
            }
        }
    }
`