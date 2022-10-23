import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

   const handleGoogleSignIn = () =>{
          providerLogin(googleProvider)
          .then(result => {
            const user = result.user;
            console.log(user);
          })
          .catch(error => console.error(error))
   }

   const handleGitHubSignIn = () =>{
    providerLogin(githubProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
   }

   const handleFacebookSignIn = () =>{
    providerLogin(facebookProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
   }
    return (
        <div>

            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGitHubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                <Button onClick={handleFacebookSignIn} variant="outline-primary"><FaFacebook></FaFacebook> Login with Facebook</Button>
            </ButtonGroup>

            <div className='mt-4'> 
                <h5>Find us on</h5>

                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>

            </div>
            <div>
              <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;