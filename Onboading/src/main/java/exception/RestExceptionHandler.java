//package exception;
//
//import java.time.LocalDate;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.context.request.WebRequest;
//import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
//
//@ControllerAdvice
//public class RestExceptionHandler {
//	
//	@ExceptionHandler(Exception.class)
//	public ResponseEntity<ErrorMessage> CommonExceptionHandler(Exception ex, WebRequest request) {
//		System.out.println("Done");
//		ErrorMessage errorMessage = new ErrorMessage(LocalDate.now(), ex.getMessage(), request.getDescription(true));
//        return new ResponseEntity<ErrorMessage>(errorMessage, HttpStatus.NOT_FOUND);
//	}
//	
//	@ExceptionHandler(NotFoundException.class)
//	public ResponseEntity<ErrorMessage> CommonExceptionHandlr(Exception ex, WebRequest request) {
//		ErrorMessage errorMessage = new ErrorMessage(LocalDate.now(), ex.getMessage(), request.getDescription(true));
//		System.out.println("Done");
//        return new ResponseEntity<ErrorMessage>(errorMessage, HttpStatus.NOT_FOUND);
//	}
//	
//}
