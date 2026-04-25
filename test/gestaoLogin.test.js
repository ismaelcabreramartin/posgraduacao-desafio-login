import {validarLogin} from '../src/gestaoLogin.js';
import assert from 'node:assert';

describe('Testando Funções de Gestão de Login', function() {
    it('Validar que entro um login válido', function() {
        // Arrange (o que eu preciso para testar a função?)
        const email = 'joao.silva@email.com';
        const password = 'Abc@2024';

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Assert
        assert.equal(retornoDaFuncao, 'Login bem-sucedido');
    });

    it('Validar que entro um login expirado', function() {
        // Arrange
        const email = 'carlos.lima@email.com';
        const password = 'CarLos@99X';

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Assert
        assert.equal(retornoDaFuncao, 'Conta expirada');
    });

    it('Validar que entro um usuáro inexistente', function() {
        // Arrange
        const email = 'usuario.inexistente@email.com';
        const password = 'SenhaIncorreta';

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Assert
        assert.equal(retornoDaFuncao, 'Usuario não encontrado');
    });
    
    it('Validar que entro uma senha incorreta (case sensitive) para o usuário existente', function() {
        // Arrange
        const email = 'maria.souza@email.com';
        const password = 'senhaForte#7';

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Act & Assert
         assert.equal(retornoDaFuncao, 'Credenciais inválidas');
    });

    it('Validar que email existente com senha inválida retorna credenciais inválidas', function() {
        // Arrange
        const email = 'joao.silva@email.com';
        const password = 'SenhaErrada!99';

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Assert
        assert.equal(retornoDaFuncao, 'Credenciais inválidas');
    });

    it('Validar que email existente com senha vazia retorna credenciais inválidas', function() {
        // Arrange
        const email = 'joao.silva@email.com';
        const password = '';

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Assert
        assert.equal(retornoDaFuncao, 'Credenciais inválidas');
    });

    it('Validar que email e senha vazios retornam usuário não encontrado', function() {
        // Arrange
        const email = '';
        const password = '';

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Assert
        assert.equal(retornoDaFuncao, 'Usuario não encontrado');
    });

    it('Validar que email e senha nulos retornam usuário não encontrado', function() {
        // Arrange
        const email = null;
        const password = null;

        // Act
        const retornoDaFuncao = validarLogin(email, password);

        // Assert
        assert.equal(retornoDaFuncao, 'Usuario não encontrado');
    });
});