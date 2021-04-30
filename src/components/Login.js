import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt='' />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Acess to Raya and the last Dragon for an additional fee with a Disney+ subscription. As of 05/01/21, the price of Disney and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src='/images/cta-logo-two.png' alt='' />
                </CTA>
                <Bgimage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vh;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`;

const Bgimage = styled.div`
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vh;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;

`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1.0);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
`;

export default Login;
