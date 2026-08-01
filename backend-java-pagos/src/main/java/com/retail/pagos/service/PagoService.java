package com.retail.pagos.service;

import com.retail.pagos.dto.PagoRequest;
import com.retail.pagos.dto.PagoResponse;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class PagoService {

    private static final double PROBABILIDAD_APROBACION = 0.85;

    public PagoResponse procesarPago(PagoRequest request) {
        boolean aprobado = ThreadLocalRandom.current().nextDouble() < PROBABILIDAD_APROBACION;

        String estado = aprobado ? "APROBADO" : "RECHAZADO";
        String mensaje = aprobado
                ? "Pago procesado exitosamente"
                : "Pago rechazado: fondos insuficientes";

        return new PagoResponse(
                estado,
                UUID.randomUUID().toString(),
                request.clienteId(),
                request.monto(),
                mensaje,
                Instant.now()
        );
    }
}
