package es.upm.dit.isst.tfgapi.model;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Alojamiento {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String direccion;

    @OneToMany(mappedBy = "alojamiento")
    private List<Cerradura> cerraduras;

    //Constructor
    public Alojamiento(Long id, String nombre, String direccion, List<Cerradura> cerraduras) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cerraduras = cerraduras;
    }

    //Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public List<Cerradura> getCerraduras() {
        return cerraduras;
    }

    public void setCerraduras(List<Cerradura> cerraduras) {
        this.cerraduras = cerraduras;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
        result = prime * result + ((direccion == null) ? 0 : direccion.hashCode());
        result = prime * result + ((cerraduras == null) ? 0 : cerraduras.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Alojamiento other = (Alojamiento) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (nombre == null) {
            if (other.nombre != null)
                return false;
        } else if (!nombre.equals(other.nombre))
            return false;
        if (direccion == null) {
            if (other.direccion != null)
                return false;
        } else if (!direccion.equals(other.direccion))
            return false;
        if (cerraduras == null) {
            if (other.cerraduras != null)
                return false;
        } else if (!cerraduras.equals(other.cerraduras))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Alojamiento [id=" + id + ", nombre=" + nombre + ", direccion=" + direccion + ", cerraduras="
                + cerraduras + "]";
    }

    

}
