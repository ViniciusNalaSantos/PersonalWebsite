import StandardButton from '../StandardButton';


const alertMessage = 'Este form ainda está em desenvolvimento, portanto não está funcionando. Caso queira entrar em contato, favor enviar um email para mim (vinicius.nala@gmail.com). Agradeço desde já pela compreensão!';
function RaiseAlert() {
    alert(alertMessage)
}

function FormButton() {
    return (
        <StandardButton type='submit' onClick={RaiseAlert}>Enviar</StandardButton>
    )
}

export default FormButton;