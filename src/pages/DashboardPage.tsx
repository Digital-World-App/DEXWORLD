import { Container, Alert } from 'react-bootstrap'
export default function DashboardPage() {
  return (
    <Container className="mt-5">
      <Alert variant="success">
        <Alert.Heading>Bem-vindo ao Painel DEXWORLD (Tauri v2 Estável)!</Alert.Heading>
        <p>
          Setup V2 Estável completo (Tauri + React + Bootstrap + Sass + Router).
        </p>
      </Alert>
    </Container>
  )
}
