import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor =  new Diretor("Gustavo", 20000, 12398748203);
diretor.cadastrarSenha("654321")
const gerente =  new Gerente("Thiago",  10000, 32164579804);
gerente.cadastrarSenha("321");

const cliente = new Cliente("Marcela", 45678912303, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "321");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "654321");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);