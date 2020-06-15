package exception;

public class EntityNotFoundException extends  Exception {
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		return "The requested entity instance does not exist";
	}

	

} 
