export class Constances
{
  public static get INVALID_NUMBER(): number{
    return -100;
  }
  public static get INVALID_DATE(): Date{
    return new Date(-8640000000000000);//min-date
  }


  public static get INVALID_STRING(): string{
    return 'Invalid String';
  }
  public static get INVALID_IMAGE_PATH(): string{
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9HTGDs9ub2ntRhM4EkVj3X3e4XHdX4ddGQ&usqp=CAU';
  }
}
