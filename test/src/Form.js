import React, { Component } from 'react';
import styles from './Form.css'
import Virgo from './zodiacs/Virgo.jpg'
import Aquarius from './zodiacs/Aquarius.jpg'
import Aries from './zodiacs/Aries.jpg'
import Cancer from './zodiacs/Cancer.jpg'
import Capricorn from './zodiacs/Capricorn.jpg'
import Gemini from './zodiacs/Gemini.jpg'
import Leo from './zodiacs/Leo.jpg'
import Pisces from './zodiacs/Pisces.jpg'
import Sagittarius from './zodiacs/Sagittarius.jpg'
import Scorpio from './zodiacs/Scorpio.jpg'
import Taurus from './zodiacs/Taurus.jpg'
import Libra from './zodiacs/Libra.jpg'
class RegistrationForm extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		date: '',
		day: '',
		month: '',
		year: '',
		zodiac:''
	  };
	  this.dateSubmit=this.dateSubmit.bind(this);
	  this.dateChange=this.dateChange.bind(this);
	}
	dateSubmit(event){
		event.preventDefault();
		var birthYear=this.state.year;
		var birthMonth=this.state.month;
		var birthDay=this.state.day;
		if(birthYear==''||birthMonth==''||birthDay=='')
		{
			this.setState({date:'Ошибка: Заполнены не все поля'})
		}
		else
		{
			var birthDate=new Date(birthYear,birthMonth-1,birthDay);
			var currentYear=new Date().getFullYear();
			var currentMonth=new Date().getMonth()+1;
			var currentDate=new Date().getDate();
			var lifeYear;
			var lifeMonth;
			var lifeDay;

			switch (birthMonth) {
				case '1':
					if (birthDay <= 19)
						this.setState({zodiac:Capricorn});
					else
						this.setState({zodiac:Aquarius});
					break;
				case '2':
					if (birthDay <= 18)
						this.setState({zodiac:Aquarius});
					else
						this.setState({zodiac:Pisces});
					break;
				case '3':
					if (birthDay <= 20)
						this.setState({zodiac:Pisces});
					else
						this.setState({zodiac:Aries});
					break;
				case '4':
					if (birthDay <= 19)
						this.setState({zodiac:Aries});
					else
						this.setState({zodiac:Taurus});
					break;
				case '5':
					if (birthDay <= 20)
						this.setState({zodiac:Taurus});
					else
						this.setState({zodiac:Gemini});
					break;
				case '6':
					if (birthDay <= 21)
						this.setState({zodiac:Gemini});
					else
						this.setState({zodiac:Cancer});
					break;
				case '7':
					if (birthDay <= 22)
						this.setState({zodiac:Cancer});
					else
						this.setState({zodiac:Leo});
					break;
				case '8':
					if (birthDay <= 22)
						this.setState({zodiac:Leo});
					else
						this.setState({zodiac:Virgo});
					break;
				case '9':
					if (birthDay <= 22)
						this.setState({zodiac:Virgo});
					else
						this.setState({zodiac:Libra});
					break;
				case '10':
					if (birthDay <= 22)
						this.setState({zodiac:Libra});
					else
						this.setState({zodiac:Scorpio});
					break;
				case '11':
					if (birthDay <= 22)
						this.setState({zodiac:Scorpio});
					else
						this.setState({zodiac:Sagittarius});
					break;
				case '12':
					if (birthDay <= 21)
						this.setState({zodiac:Sagittarius});
					else
						this.setState({zodiac:Capricorn});
					break;
			}

			if(currentMonth<birthMonth || currentMonth==birthMonth && currentDate<birthDay )
			{
				lifeYear=currentYear-birthYear-1;
				lifeMonth=12-birthMonth+currentMonth;
			}
			else if(currentMonth>birthMonth || currentMonth==birthMonth && currentDate>=birthDay)
			{
				lifeYear=currentYear-birthYear;
				lifeMonth=currentMonth-birthMonth;
			}
			if(currentDate>=birthDay)
			{
				lifeDay=currentDate-birthDay;
			}
			else
			{
				lifeMonth--;
				if(lifeMonth<0)
				{
					lifeMonth=11;
					lifeYear--;
				}
				if(birthMonth==1 || birthMonth==3 ||birthMonth==5 ||birthMonth==7 ||birthMonth==8 ||birthMonth==10 ||birthMonth==12)
				{
					lifeDay=currentDate+31-birthDay;
				}
				else if(birthMonth==4 || birthMonth==6 ||birthMonth==9 ||birthMonth==11)
				{
					lifeDay=currentDate+30-birthDay;
				}
				else if(birthMonth==2 && ((birthYear%4==0 && birthYear%100!=0)||(birthYear%400)))
				{
					lifeDay=currentDate+29-birthDay;
				}
				else
				{
					lifeDay=currentDate+28-birthDay;
				}
			}
			
			this.setState({date:'Тебе '+lifeYear+' лет '+lifeMonth+' месяцев и '+lifeDay+' дней. Твой знак зодиака:'})
		}
	}
	dateChange(event){
		var birthMonth=this.state.month;
		var birthYear=this.state.year;
		var birthDay=this.state.day;
		var currentYear=new Date().getFullYear();
		var currentMonth=new Date().getMonth()+1;
		var currentDate=new Date().getDate();
		switch(event.target.placeholder){
			case 'day':
					if(  ((birthMonth=='' || birthMonth==1 || birthMonth==3 ||birthMonth==5 ||birthMonth==7 ||birthMonth==8 ||birthMonth==10 ||birthMonth==12) && event.target.value>31) || ((birthMonth==4 || birthMonth==6 ||birthMonth==9 ||birthMonth==11) && event.target.value>30 ) || ((birthMonth==2 && ((birthYear%4==0 && birthYear%100!=0)||(birthYear%400==0))) && event.target.value>29) || ((birthMonth==2 && ((birthYear%4!=0 || birthYear%100==0) && birthYear%400!=0)) && event.target.value>28)|| event.target.value<=0 || (currentYear<=birthYear && currentMonth<=birthMonth && currentDate<event.target.value) )
						this.setState({day:''})
					else
						this.setState({day:event.target.value})
				break;
			case 'month':
					if(event.target.value>12 || event.target.value<=0 || (birthYear>=currentYear && event.target.value>currentMonth))
						this.setState({month:''})
					else
						this.setState({month:event.target.value})
					birthMonth=event.target.value;
					if(  ((birthMonth=='' || birthMonth==1 || birthMonth==3 ||birthMonth==5 ||birthMonth==7 ||birthMonth==8 ||birthMonth==10 ||birthMonth==12) && birthDay>31) || ((birthMonth==4 || birthMonth==6 ||birthMonth==9 ||birthMonth==11) && birthDay>30 ) || ((birthMonth==2 && ((birthYear%4==0 && birthYear%100!=0)||(birthYear%400==0))) && birthDay>29) || ((birthMonth==2 && ((birthYear%4!=0 || birthYear%100==0) && birthYear%400!=0)) && birthDay>28)|| birthDay<=0 || (currentYear<=birthYear && currentMonth<=birthMonth && currentDate<birthDay) )
						this.setState({day:''})
				break;
			case 'year':
					if(birthYear>currentYear || birthYear<0)
						this.setState({year:''})
					else
						this.setState({year:event.target.value})
					birthYear=event.target.value;
					if(birthMonth>12 || birthMonth<=0 || (birthYear>=currentYear && birthMonth>currentMonth))
						this.setState({month:''})
					if(  ((birthMonth=='' || birthMonth==1 || birthMonth==3 ||birthMonth==5 ||birthMonth==7 ||birthMonth==8 ||birthMonth==10 ||birthMonth==12) && birthDay>31) || ((birthMonth==4 || birthMonth==6 ||birthMonth==9 ||birthMonth==11) && birthDay>30 ) || ((birthMonth==2 && ((birthYear%4==0 && birthYear%100!=0)||(birthYear%400==0))) && birthDay>29) || ((birthMonth==2 && ((birthYear%4!=0 || birthYear%100==0) && birthYear%400!=0)) && birthDay>28)|| birthDay<=0 || (currentYear<=birthYear && currentMonth<=birthMonth && currentDate<birthDay) )
						this.setState({day:''})
				break;
			default:
				break;
		}

		
	}
  render() {
	  
    return (
      <form onSubmit={this.dateSubmit}>
		<input maxlength='2' type="text" placeholder="day" value={this.state.day} onChange={this.dateChange}/><br/>
		<input maxlength='2' type="text" placeholder="month" value={this.state.month} onChange={this.dateChange}/><br/>
		<input maxlength='4' type="text" placeholder="year" value={this.state.year} onChange={this.dateChange}/><br/>
		<button className="green">save</button>
		<div>{this.state.date}</div><br/>
		<img src={this.state.zodiac}/>
	  </form>
	  
    );
  }
}

export default RegistrationForm;