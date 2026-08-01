package com.retail.pagos.dto;

import java.math.BigDecimal;
import java.time.Instant;

public record PagoResponse(
        String estado,
        String idTransaccion,
        Long clienteId,
        BigDecimal monto,
        String mensaje,
        Instant timestamp
) {
}
