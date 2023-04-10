package es.upm.dit.isst.tfgapi.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class IntentosAcceso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cerradura cerradura;

    private LocalDateTime fecha;

    @ManyToOne
    private Usuario usuario;

    private Boolean resultado;

    public IntentosAcceso(Long id, Cerradura cerradura, LocalDateTime fecha, Usuario usuario, Boolean resultado) {
        this.id = id;
        this.cerradura = cerradura;
        this.fecha = fecha;
        this.usuario = usuario;
        this.resultado = resultado;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cerradura getCerradura() {
        return cerradura;
    }

    public void setCerradura(Cerradura cerradura) {
        this.cerradura = cerradura;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Boolean getResultado() {
        return resultado;
    }

    public void setResultado(Boolean resultado) {
        this.resultado = resultado;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((cerradura == null) ? 0 : cerradura.hashCode());
        result = prime * result + ((fecha == null) ? 0 : fecha.hashCode());
        result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
        result = prime * result + ((resultado == null) ? 0 : resultado.hashCode());
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
        IntentosAcceso other = (IntentosAcceso) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (cerradura == null) {
            if (other.cerradura != null)
                return false;
        } else if (!cerradura.equals(other.cerradura))
            return false;
        if (fecha == null) {
            if (other.fecha != null)
                return false;
        } else if (!fecha.equals(other.fecha))
            return false;
        if (usuario == null) {
            if (other.usuario != null)
                return false;
        } else if (!usuario.equals(other.usuario))
            return false;
        if (resultado == null) {
            if (other.resultado != null)
                return false;
        } else if (!resultado.equals(other.resultado))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "IntentosAcceso [id=" + id + ", cerradura=" + cerradura + ", fecha=" + fecha + ", usuario=" + usuario
                + ", resultado=" + resultado + "]";
    }

    

}
