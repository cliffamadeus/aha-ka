import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent, 
  IonFooter, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { globe, heart, mapOutline, navigate, } from 'ionicons/icons';
import { useState } from 'react';

  const LoginContainer: React.FC = () => {
    const navigation = useIonRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const doLogin = async () => {
      navigation.push('/aha-ka/home', 'forward', 'replace');
    };
    
    return (
      <IonPage>
            <IonContent className='ion-padding'>
                <div style={{
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:'25%'
                }}>
                  <IonAvatar
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%', 
                      overflow: 'hidden' 
                    }}
                  >
                    {/*
                    <img
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      style={{
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover' 
                      }}
                    />
                    */}
                     <IonIcon 
                      icon={mapOutline}
                      color='secondary'
                      style={{ fontSize: '120px', color: '#6c757d' }} 
                    />
                  </IonAvatar>
                  <h1 style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>USER LOGIN</h1>
                  <IonInput
                    label="Email" 
                    labelPlacement="floating" 
                    fill="outline"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onIonChange={e => setEmail(e.detail.value!)}
                  />
                  <IonInput style={{
                      marginTop:'10px',
                    }}      
                    fill="outline"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onIonChange={e => setPassword(e.detail.value!)}
                  ><IonInputPasswordToggle slot="end"></IonInputPasswordToggle></IonInput>
                </div>
                <IonButton style={{
                    marginTop:'15px'
                  }}
                  onClick={doLogin} 
                  expand="full" 
                  shape='round'
                  color={'secondary'}>
                  Login
                </IonButton>

                <IonButton routerLink="/aha-ka/signup" expand="full" fill="clear" shape='round'>
                  Don't have an account? Register here
                </IonButton>

                {/* IonAlert for displaying login errors */}
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={() => setShowAlert(false)}
                  header="Login Failed"
                  message={errorMessage}
                  buttons={['OK']}
                />

                {/* IonToast for success message */}
                <IonToast
                  isOpen={showToast}
                  onDidDismiss={() => setShowToast(false)}
                  message="Login successful! Redirecting..."
                  duration={1500}
                  position="top"
                  color="primary"
                />
            </IonContent>
            <IonFooter
              style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
              }}
              >
              <p>
                Made with 
                <IonIcon icon={heart} /> 
                CAFE
              </p>
            </IonFooter>
        </IonPage>
    );
  };
  
  export default LoginContainer;