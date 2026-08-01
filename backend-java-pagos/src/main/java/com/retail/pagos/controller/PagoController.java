package com.retail.pagos.controller;

import com.retail.pagos.dto.PagoRequest;
import com.retail.pagos.dto.PagoResponse;
import com.retail.pagos.service.PagoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pagos")
@CrossOrigin(origins = "*")
public class PagoController {

    private final PagoService pagoService;

    public PagoController(PagoService pagoService) {
        this.pagoService = pagoService;
    }

    @PostMapping("/procesar")
    public ResponseEntity<PagoResponse> procesarPago(@Valid @RequestBody PagoRequest request) {
        PagoResponse response = pagoService.procesarPago(request);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("OK");
    }
}
