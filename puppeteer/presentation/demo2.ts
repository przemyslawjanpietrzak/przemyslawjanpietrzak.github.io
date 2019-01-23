abstract class AbstractService {
  public method() {}
}

class Service extends AbstractService {
  public readonly field = [42];
}

const service = new Service();
service.field.push(42);
service.field = [43];

const abstractService = new AbstractService();

