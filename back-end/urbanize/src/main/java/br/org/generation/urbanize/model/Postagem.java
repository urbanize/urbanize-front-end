package br.org.generation.urbanize.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_postagem")
public class Postagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Temporal(TemporalType.TIMESTAMP)
	private Date data = new java.sql.Date(System.currentTimeMillis());

	@Size (max = 1000)
	private String texto;

	@NotBlank(message = "O título é obrigatório")
	private String titulo;

	//alterado o nome do atributo de mídia pra foto
	@NotBlank(message = "A foto é obrigatória")
	@Size (max = 1000)
	private String foto;

	@NotBlank(message = "O endereço é obrigatório")
	@Size(min = 10, max = 255)
	private String endereco;

	@NotBlank(message = "O contato é obrigatório")
	@Size (min = 10)
	private String contato;

	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Tema tema;

	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Usuario usuario;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public Tema getTema() {
		return tema;
	}

	public void setTema(Tema tema) {
		this.tema = tema;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getEndereco(){
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
}
