package br.org.generation.urbanize.model;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "tb_usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotBlank(message = "É obrigatório inserir o nome completo")
	private String nomeCompleto;
	
	@ApiModelProperty(example = "email@email.com.br")
	@NotBlank(message = "É obrigatório inserir e-mail")
	@Email
	private String usuario;

	@NotBlank(message = "É obrigatório inserir senha")
	@Size(min = 8 , message = "A senha deve conter no mínimo 8 caracteres")
	private String senha;

	@NotBlank(message = "O endereço é obrigatório")
	@Size(min = 10, max = 255)
	private String endereco;

	@NotBlank(message = "O atributo bio é obrigatório")
	@Size(min = 10, max = 255)
	private String bio;

	private String foto;
	
	private String tipo;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("usuario") 
	private List<Postagem> postagem;
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}

	public String getEndereco(){
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getBio(){
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}
}
