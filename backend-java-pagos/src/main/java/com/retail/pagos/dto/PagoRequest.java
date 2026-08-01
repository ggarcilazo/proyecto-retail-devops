package com.retail.pagos.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

public record PagoRequest(
        @NotNull(message = "clienteId es obligatorio")
        @Min(value = 1, message = "clienteId debe ser positivo")
        Long clienteId,

        @NotNull(message = "monto es obligatorio")
        @DecimalMin(value = "0.01", message = "monto debe ser mayor a 0")
        BigDecimal monto
) {
}
