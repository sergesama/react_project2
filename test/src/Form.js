import React, { Component } from 'react';
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
		var birthDate=new Date(birthYear,birthMonth-1,birthDay);
		var currentYear=new Date().getFullYear();
		var currentMonth=new Date().getMonth()+1;
		var currentDate=new Date().getDate();
		var lifeYear;
		var lifeMonth;
		var lifeDay=Math.round((new Date().getTime()-birthDate.getTime())/ (1000*60*60*24));

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

		if(currentMonth<birthMonth || currentMonth==birthMonth && currentDate<birthDay)
		{
			lifeYear=currentYear-birthYear-1;
			lifeMonth=12-birthMonth+currentMonth+lifeYear*12;
		}
		else
		{
			lifeYear=currentYear-birthYear;
			lifeMonth=currentMonth-birthMonth+lifeYear*12;
		}
		this.setState({date:'Тебе '+lifeYear+' лет '+lifeMonth+' месяцев и '+lifeDay+' дней. Твой знак зодиака:'})

	}
	dateChange(event){
		
		switch(event.target.placeholder){
			case 'day':
				this.setState({day:event.target.value})
				break;
			case 'month':
				this.setState({month:event.target.value})
				break;
			case 'year':
				this.setState({year:event.target.value})
				break;
			default:
				break;
		}

		
	}
  render() {
	  
    return (
      <form onSubmit={this.dateSubmit}>
		<input type="text" placeholder="day" value={this.state.day} onChange={this.dateChange}/><br/>
		<input type="text" placeholder="month" value={this.state.month} onChange={this.dateChange}/><br/>
		<input type="text" placeholder="year" value={this.state.year} onChange={this.dateChange}/><br/>
		<button>save</button>
		<div>{this.state.date}</div><br/>
		<img src={this.state.zodiac}/>
	  </form>
	  
    );
  }
}

export default RegistrationForm;