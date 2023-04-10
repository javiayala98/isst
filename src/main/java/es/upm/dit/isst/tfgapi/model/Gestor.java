package es.upm.dit.isst.tfgapi.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Gestor {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String telefono;

    private String email;

    @OneToMany(mappedBy = "gestor")
    private List<Alojamiento> alojamientos;


    public Gestor(Long id, String nombre, String telefono, String email, List<Alojamiento> alojamientos) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.alojamientos = alojamientos;
    }

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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Alojamiento> getAlojamientos() {
        return alojamientos;
    }

    public void setAlojamientos(List<Alojamiento> alojamientos) {
        this.alojamientos = alojamientos;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
        result = prime * result + ((telefono == null) ? 0 : telefono.hashCode());
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((alojamientos == null) ? 0 : alojamientos.hashCode());
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
        Gestor other = (Gestor) obj;
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
        if (telefono == null) {
            if (other.telefono != null)
                return false;
        } else if (!telefono.equals(other.telefono))
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (alojamientos == null) {
            if (other.alojamientos != null)
                return false;
        } else if (!alojamientos.equals(other.alojamientos))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Gestor [id=" + id + ", nombre=" + nombre + ", telefono=" + telefono + ", email=" + email
                + ", alojamientos=" + alojamientos + "]";
    }

    

}
