/**
 * @file Testes unitários da função validarLogin
 * @author Ismael
 * @date 2026-04-25
 */

const dadosLogin = [
    {
        "id": 1,
        "email": "user@example.com",
        "password": "Password123",
        "expirado": false
    },
    {
        "id": 2,
        "email": "joao.silva@email.com",
        "password": "Abc@2024",
        "expirado": false
    },
    {
        "id": 3,
        "email": "maria.souza@email.com",
        "password": "SenhaForte#7",
        "expirado": false
    },
    {
        "id": 4,
        "email": "carlos.lima@email.com",
        "password": "CarLos@99X",
        "expirado": true
    },
    {
        "id": 5,
        "email": "ana.oliveira@email.com",
        "password": "AnaOliv#2023",
        "expirado": true
    }
]

export function validarLogin(email, password) {

    for (let i = 0; i < dadosLogin.length; i++) {
        const cadastro = dadosLogin[i];

        if (cadastro.email === email && cadastro.password === password) {
            if (cadastro.expirado === true) {
                return 'Conta expirada';
            }
            return 'Login bem-sucedido';
        }

        if (cadastro.email===email && cadastro.password!==password) {
            return 'Credenciais inválidas';
        }
    }

    return 'Usuario não encontrado'
}