import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { FooService } from './foo.service';


describe('FooService', () => {
  let httpTestingController: HttpTestingController;
  let fooService: FooService;
  const serverUrl: string = '/rest/fulcrum/v1/nodeMailer/sendCustomerUserGuide';
  const ngUnsubscribe: Subject<any> = new Subject();

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule],
    providers: [FooService],
    teardown: { destroyAfterEach: false }
});
    // Returns a service with the MockBackend
    fooService = TestBed.inject(FooService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  test('dummyTest', () => {
    expect(true).toEqual(true);
  })
});
