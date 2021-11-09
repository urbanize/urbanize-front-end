package br.org.generation.urbanize.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.urbanize.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository <Tema, Long>{
	
	public List<Tema> findAllByTemaContainingIgnoreCase(String tema);

}
